export default function NavBarComponent() {
  return (
    <nav>
      <div className="flex justify-between items-center mx-20 my-3">
        <div className="flex justify-center items-center gap-4 cursor-pointer">
          <img
            width="40px"
            height="40px"
            src="public/logoHomepage.png"
            alt="logoHomepage"
          />
          <p className="text-2xl font-semibold text-gray-700">Showcase</p>
        </div>
        <div>
          <ul className="flex justify-center items-center gap-7 w-80">
            <li className="hover:text-primary">Home</li>
            <li className="hover:text-primary">About</li>
            <li className="hover:text-primary">Project</li>
            <li className="hover:text-primary">Blog</li>
            <li className="hover:text-primary">Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
