import Link from "LiberComp/Link.tsx";

export default function Header() {
    return (
        <footer className="bg-gray-800 text-white h-auto w-screen">
            <div>
                <p className="text-white text-center p-2 text-xl">Links</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <Link to="/" className="text-center hover:bg-gray-600">Top</Link>
                    <Link to="#example" className="text-center hover:bg-gray-600">Example</Link>
                    <Link to="/contact" className="text-center hover:bg-gray-600">Contact</Link>
                    <Link to="/" className="text-center hover:bg-gray-600">GitHub</Link>
                </div>
            </div>

            <div className="text-center p-2">
                &copy; 2023 amex / <a href="https://twitter.com/macl2189" target="_blank">macl2189</a> All rights reserved.  
            </div>
        </footer>
    )
}