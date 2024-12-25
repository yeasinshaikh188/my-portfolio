import Logo from "../assets/JS.png"
function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/50 backdrop:blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-0">
        <div className="max-w-7 mx-auto flex h-14 items-center">
            <div className="md:mr-4 flex justify-between w-full">
                <a href="#" className="mr-6 flex items-center space-x-2">
                    <img src={Logo} alt="" />
                </a>
            </div>
        </div>

    </header>
  )
}

export default Navbar