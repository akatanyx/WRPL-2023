interface KategoriProps {
    children: React.ReactNode;
    onClick?: () => void;
  }
  
  const Kategori: React.FC<KategoriProps> = ({ children, onClick }) => {
    return (
      <button
        className="w-[61px] h-[19px] border-2 border-[#EC7505] rounded-lg flex justify-center"
        onClick={onClick}
      >
        <h1 className="font-semibold font-poppins text-[12px] text-[#EC7505]">
          {children}
        </h1>
      </button>
    );
  };
  
  export default Kategori;