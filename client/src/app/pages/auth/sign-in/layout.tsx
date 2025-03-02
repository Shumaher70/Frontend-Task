interface ISignInLayout {
  children: React.ReactNode;
}

export const SignInLayout = ({ children }: ISignInLayout) => {
  return (
    <main className="flex h-[calc(100vh-50px)] bg-neutral-100">
      <div className="mx-auto max-w-screen-2xl p-4">
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
};
