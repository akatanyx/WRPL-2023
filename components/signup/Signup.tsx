export default function Signup (){
    return (
        <form action="form_signup.txt" method="post">
            <label >Nama Lengkap</label>
            <div className="border-2 flex flex-row relative sm:w-1/3 sm:mx-auto m-4 p-4">
                <img 
                className="w-[20px]"
                src="/logo.svg"
                ></img>
                <input className="w-fit" ></input>
            </div>
        </form>
    )
}