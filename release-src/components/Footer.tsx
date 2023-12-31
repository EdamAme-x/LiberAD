import Link from "LiberComp/Link.tsx";

export default function Header() {
    return (
        <footer className="bg-gray-900 text-white h-auto w-screen">
            <div>
                <p className="text-white text-center p-2 text-xl">Links</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <Link to="/" className="text-center hover:bg-gray-600">Top</Link>
                    <Link to="/#example" className="text-center hover:bg-gray-600">Example</Link>
                    <Link to="https://twitter.com/macl2189" className="text-center hover:bg-gray-600">Contact</Link>
                    <Link to="https://github.com/edamame-x/LiberAD" className="text-center hover:bg-gray-600">GitHub</Link>
                </div>
            </div>

            <div className="text-center p-2 mt-5">
                &copy; 2023 amex / <a href="https://twitter.com/macl2189" target="_blank">macl2189</a> All rights reserved.  
            </div>
        </footer>
    )
}