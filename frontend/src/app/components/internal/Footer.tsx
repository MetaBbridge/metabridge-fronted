const Footer = () => {
  return (
    <footer className="border-t-gradient-to-r mt-0 flex h-16 flex-col items-center justify-center border-t-2 from-white via-[#1443FF] to-white [border-image:linear-gradient(to_right,white,#1443FF,white)_1]">
      <div className="p-6">
        <p className="text-center text-[#141414]">
          &copy; Copyright MetaBridge Inc, {new Date().getFullYear()}, All Right
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
