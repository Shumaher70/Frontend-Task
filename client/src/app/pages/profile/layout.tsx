interface ILayoutProfile {
  children: React.ReactNode;
}

export const LayoutProfile = ({ children }: ILayoutProfile) => {
  return (
    <main className="flex h-[calc(100vh-50px)] w-full bg-neutral-100">
      <div className="mx-auto mt-0 w-full max-w-screen-xl p-4 sm:mt-20">
        {children}
      </div>
    </main>
  );
};
