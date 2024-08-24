import React from 'react';

export default function Footer1() {
  return (
    <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="flex justify-center">
          <a href="#" aria-label="Facebook" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a href="#" aria-label="Twitter" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z" fillRule="evenodd" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <section>
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-2 14v-2h4v2h-4zm0-4v-4h4v4h-4zm4-4h-4v-2h4v2z" />
              </svg>
              About us
            </h6>
            <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </section>

          <section>
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-neutral-600 dark:text-neutral-200">Men</a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 dark:text-neutral-200">Women</a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 dark:text-neutral-200">Children</a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 dark:text-neutral-200">Couple</a>
              </li>
            </ul>
          </section>

          <section>
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-neutral-600 dark:text-neutral-200">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 dark:text-neutral-200">Settings</a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 dark:text-neutral-200">Orders</a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 dark:text-neutral-200">Help</a>
              </li>
            </ul>
          </section>

          <section>
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <ul className="list-unstyled">
              <li>
                <p className="text-neutral-600 dark:text-neutral-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-6 16h12v-1.5h-12v1.5zm6-10.5c-1.35 0-2.682.597-3.697 1.583-.31.334-.54.724-.69 1.143-.309.827-.437 1.699-.437 2.519 0 1.119.121 2.237.385 3.355.462 2.005 1.357 3.932 2.662 5.615l-1.536 1.282c-1.872-2.486-2.932-5.445-3.061-8.615-.036-.518.042-1.037.187-1.544.159-.518.395-1.035.69-1.5.488-.701 1.075-1.364 1.759-1.944 1.219-1.012 2.66-1.924 4.185-2.726.868-.384 1.713-.59 2.541-.758-.146.855-.345 1.708-.588 2.555-.517 1.689-1.54 3.173-2.925 4.398-1.66 1.56-3.623 2.522-5.71 3.019-.337.051-.675.097-1.007.128 1.522.484 3.129.732 4.754.732 2.95 0 5.867-1.055 8.037-3.026.51-.447.978-.945 1.415-1.483 1.038-1.115 2.097-2.332 2.953-3.611.192-.274.358-.555.504-.838.265-.535.459-1.086.584-1.662.121-.568.217-1.135.263-1.706-.683-.381-1.431-.713-2.22-.966-1.093-.303-2.205-.598-3.338-.888-.678-.149-1.362-.294-2.05-.434-.191-.034-.382-.063-.572-.089-.383-.046-.765-.086-1.148-.122-.371-.032-.743-.045-1.115-.045-.776 0-1.548.083-2.316.235-.865.157-1.709.418-2.538.753z" />
                  </svg>
                  info@example.com
                </p>
              </li>
              <li>
                <p className="text-neutral-600 dark:text-neutral-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.8 13.2l-5.2-5.2c-.15-.15-.35-.2-.5-.2-.16 0-.36.05-.5.2l-2.6 2.6c-.39.39-.39 1.02 0 1.4s1.02.39 1.4 0l2.2-2.2 4.2 4.2c.39.39 1.02.39 1.4 0s.39-1.02 0-1.4zm-.8 6.4c0 .55-.45 1-1 1h-6c-.55 0-1-.45-1-1v-5.6c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v5.6z" />
                  </svg>
                  (123) 456-7890
                </p>
              </li>
              <li>
                <p className="text-neutral-600 dark:text-neutral-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 20v-9.414l-6-6-9 9v6.414l6 6h9zm-11-6h6v-1.5h-6v1.5z" />
                  </svg>
                  123 Street, City, Country
                </p>
              </li>
            </ul>
          </section>
        </div>
      </div>

      <div className="text-center p-6 bg-neutral-200 dark:bg-neutral-700">
        <span>© 2024 Kithmini Fashion & Addvertising. All rights reserved.</span>
      </div>
    </footer>
  );
}
