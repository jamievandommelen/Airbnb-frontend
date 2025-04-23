export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm py-6 px-4 mt-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-col sm:flex-row gap-2">
        <p>&copy; 2022 YourAirbnbClone. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
}
