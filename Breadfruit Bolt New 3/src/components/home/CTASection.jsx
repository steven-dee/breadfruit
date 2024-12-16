import { Link } from 'react-router-dom';

function CTASection() {
  return (
    <div className="bg-primary">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to get started?</span>
          <span className="block">Get your free quote today.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-primary-100">
          Join thousands of customers across the Caribbean who trust us with their insurance needs.
          Get covered in minutes, not weeks.
        </p>
        <Link
          to="/get-quotes"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-primary-50 sm:w-auto"
        >
          Get Free Quote
        </Link>
      </div>
    </div>
  );
}

export default CTASection;