import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth, db } from '../firebase';
import { ref, set } from 'firebase/database';
import { Link  } from "react-router-dom";

const schema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long and include numbers and special characters' }).regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])/, { message: 'Password must include at least one number and one special character' }),
    phone: z.string().min(10, { message: 'Phone number must be at least 10 digits' }),
});

const Register = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });

    const handleSubmits = async (data) => {
        try {
            console.log("Form submitted");
            console.log("Data:", data);
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
            const user = userCredential.user;
            reset(); // Reset the form after submission
            // Store user data in Realtime Database
            await set(ref(db, 'users/' + user.uid), {
                email: user.email,
                password: data.password,
                phone: data.phone,
                registrationTime: new Date(),
            });
            // Send email verification
            await sendEmailVerification(user);
            alert('Registration successful! Please check your email to verify your account before logging in.');
            navigate('/login');
        } catch (err) {
            console.log("Error submitting form:", err);
            alert(err.message);
        }
    };

  return (
    <div className="min-h-fit w-[92%] ml-5 mt-10 md:mt-15 flex items-center justify-center animate-fade-in">
      <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-md animate-slide-up">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Register for HealthCare</h2>
        <form onSubmit={handleSubmit(handleSubmits)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("email")}
            />
            {errors.email?.message && <p className="text-red-500 text-sm">{errors.email?.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("password")}
            />
            {errors.password?.message && <p className="text-red-500 text-sm">{errors.password?.message}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("phone")}
            />
            {errors.phone?.message && <p className="text-red-500 text-sm">{errors.phone?.message}</p>}
          </div>
          <div className="flex items-center justify-between">

           <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline animate-pulse"
            >
             Register
            </button>
          </div>
        </form>
        <p className="text-center mt-4">
          Already have an account? <Link to ="/login" className="text-blue-500 hover:text-blue-700">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
