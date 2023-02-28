import Link from 'next/link'

export default function Navletseat() {
    return (
        <div className="bg-white block fixed inset-x-0 top-16 z-10 text-center ml-4">
            <div className="flex justify-start space-x-4 text-[14px]">
                {/* In progress */}
                <div>
                    <Link href="landingcoba">In Progress</Link>
                </div>
                {/* Completed */}
                <div>
                    <Link href="completed">Completed</Link>
                </div>
                {/* Canceled */}
                <div>
                    <Link href="completed">Canceled</Link>
                </div>
            </div>
        </div>
    )
}