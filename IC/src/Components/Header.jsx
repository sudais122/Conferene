
const Header = () => {
  return (
    <header className="w-full bg-[#EFF9F8] px-6 py-4 md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        
        {/* Host Institution */}
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white">
            <img
              src=""
              alt="Abdul Wali Khan University Mardan logo"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="flex flex-col">
            <p className="text-sm font-medium text-[#4D616C]">
              Host institution
            </p>

            <h5 className="mt-1 text-base font-semibold text-[#003B68] md:text-lg">
              Abdul Wali Khan University Mardan
            </h5>
          </div>
        </div>

        {/* HEC */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white">
            <img
              src=""
              alt="HEC logo"
              className="h-full w-full object-contain"
            />
          </div>

          <p className="text-sm font-semibold text-[#4D616C] md:text-base">
            HEC
          </p>
        </div>

      </div>
    </header>
  )
}

export default Header
