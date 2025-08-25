import { Users } from "lucide-react";

const SidebarSkeleton = () => {
  const skeletonContacts = Array(15).fill(null);

  return (
    <aside
      className="h-full w-full md:w-4/12 border-r border-base-300 
    flex flex-col transition-all duration-200"
    >

      <div className="border-b border-base-300 w-full p-5">
        <div className="flex items-center gap-2">
          <Users className="w-6 h-6" />
          <span className="font-medium hidden lg:block">Contacts</span>
        </div>
      </div>

      <div className="overflow-y-auto w-full py-3">
        {skeletonContacts.map((_, idx) => (
          <div key={idx} className="w-full p-3 flex items-center gap-3">
            <div className="relative mx-auto lg:mx-0">
              <div className="skeleton size-12 rounded-full" />
            </div>

            <div className="text-left min-w-0 flex-1">
              <div className="skeleton h-4 w-8/12 mb-2" />
              <div className="skeleton h-3 w-4/12" />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SidebarSkeleton;