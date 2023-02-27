export default function Navletseat() {
    return (
        <div className="sticky top-0 p-2 text-center">
            <div className="flex justify-start space-x-4 text-[11px]">
                {/* In progress */}
                <div>
                    <p>In Progress</p>
                </div>
                {/* Completed */}
                <div>
                    <p>Completed</p>
                </div>
                {/* Canceled */}
                <div>
                    <p>Canceled</p>
                </div>
            </div>
        </div>
    )
}