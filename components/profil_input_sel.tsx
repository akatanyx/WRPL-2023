// Ubah nama filenya jadi apa gitu ma, aku bingung ngasih nama file e
// automate isi untuk profile

export default function profil_input_sel ({ children }:{[key:string]:any}) {
    return (
    <div>
        <p className="font-bold font-inter text-lg">
            {children}
        </p>
    </div>
    )
}