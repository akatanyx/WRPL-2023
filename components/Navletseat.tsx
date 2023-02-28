import Link from 'next/link'

export default function Navletseat() {
    return (
        <div className="bg-white block fixed inset-x-0 top-20 text-center">
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