


const Footer = () => {
  return (
    <footer className="p-4 mt-5 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
        <div className="flex justify-center items-center object-cover ">
         <img src="https://ik.imagekit.io/8wxvbajv2/Health-Insurance.jpg" alt="" className="w-[100px] object-cover flex  rounded-3xl"/>
        <a
          href="#"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"  >
          HealthCare..
        </a>
        </div>
        <p className="my-6 text-gray-500 dark:text-gray-400">
          Open-source HealthCare Center library of HealthCare Website and interactive Site
          built Yours Dream...
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Premium
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Campaigns
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Affiliate Program
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Contact
            </a>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="#" className="hover:underline">
            HealthCare™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>

  )
}
export default Footer;