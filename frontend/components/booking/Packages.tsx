import { PackageModal } from './PackageModal'

export const Packages = () => {
  return (
    <div className="flex flex-row items-center justify-center rounded-lg bg-gray-200 p-4">
      <div className="max-w-[500px]">
        <span className="text-lg font-bold">Fun dive</span>
        <p className="text-sm text-foreground opacity-70">
          Island Tour B - includes Barracuda Lake, Skeleton Wreck and Twin
          Lagoon. Each session will last around 1 hour. Minimum of 6 people.
        </p>
      </div>
      <div className="ml-4">
        <PackageModal />
      </div>
    </div>
  )
}
