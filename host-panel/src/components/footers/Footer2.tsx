import React from 'react'

const Footer2 = () => {
  return (
    <section className="py-10">
  <div className="container">
    <div className="text-center">
      <div>
        <h2 className="md:text-3xl text-xl font-semibold my-5">
          Start offering your users a better experience
        </h2>
        <p className="text-slate-500">
          Start working with <span className="text-primary">Prompt</span> to
          showcase your app to thousands of people.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 my-10">
          <a href="#">
            <img src="assets/images/buttons/google.png" className="w-48" />
          </a>
          <a href="#">
            <img src="assets/images/buttons/store.png" className="w-48" />
          </a>
        </div>
      </div>
      <div>
        <ul className="flex flex-wrap items-center justify-center gap-5">
          <li className="after:content-['-'] after:text-slate-500 after:font-extrabold">
            <a href="#" className="hover:text-primary me-4">
              About
            </a>
          </li>
          <li className="after:content-['-'] after:text-slate-500 after:font-extrabold">
            <a href="#" className="hover:text-primary me-4">
              Privacy
            </a>
          </li>
          <li className="after:content-['-'] after:text-slate-500 after:font-extrabold">
            <a href="#" className="hover:text-primary me-4">
              Terms
            </a>
          </li>
          <li className="after:content-['-'] after:text-slate-500 after:font-extrabold">
            <a href="#" className="hover:text-primary me-4">
              Developers
            </a>
          </li>
          <li className="after:content-['-'] after:text-slate-500 after:font-extrabold">
            <a href="#" className="hover:text-primary me-4">
              Support
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary">
              Careers
              <span className="px-2 py-1 text-xs rounded-full text-primary bg-primary/10">
                We re hiring
              </span>
            </a>
          </li>
        </ul>
        <p className="my-5">2024 © Prompt. All rights reserved. Crafted by</p>
        <a href="index.html">
          <img src="assets/images/logo-dark.png" className="h-8 mx-auto" />
        </a>
      </div>
    </div>
  </div>
</section>

  )
}

export default Footer2