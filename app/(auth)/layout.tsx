const AuthLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return ( 
      //sign in ko middle mein laane ke liye
      // use kiya gaya h
      <main className="h-full bg-[#111827] flex items-center justify-center">
        {children}
      </main>
    );
  }
   
  export default AuthLayout;