const Header = () => {
  return (
    <header className="w-full border-b border-[#DCE8E8] bg-[#EFF9F8] px-4 py-3 sm:px-6 md:px-10 md:py-4">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        {/* Host Institution */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white sm:h-14 sm:w-14">
            <img
              src="/AWKUM-Logo.png"
              alt="Abdul Wali Khan University Mardan logo"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="flex flex-col">
            <p className="text-xs font-medium text-[#4D616C] sm:text-sm">
              Host institution
            </p>

            <h5 className="mt-1 text-sm font-semibold leading-tight text-[#003B68] sm:text-base md:text-lg">
              Abdul Wali Khan University Mardan
            </h5>
          </div>
        </div>

        {/* HEC */}
        <div className="flex items-center gap-3 self-start sm:self-auto">
<div className="flex h-15 w-15 items-center justify-center overflow-hidden rounded-md bg-white">
  <img
    src="/HEC.png"
    alt="HEC logo"
    className="h-full w-full object-contain"
  />
</div>
        </div>

      </div>
    </header>
  )
}

export default Header