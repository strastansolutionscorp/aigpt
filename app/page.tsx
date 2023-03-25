import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
            <h1 className="text-5xl font-bold mb-20">OpenAI KnowledgeBase!</h1>

            <div className='flex space-x-2 text-center'>
                <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                        {/* Sun Icon */}
                        <SunIcon className="h-8 w-8"/>
                        <h2>STRA-tegic</h2>
                    </div>
                    <div className="space-y-2">
                        <p className="infoText">"Use the Bot Wisely"</p>
                        <p className="infoText">"Do not spam"</p>
                        <p className="infoText">"Understand your model"</p>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                        {/* Sun Icon */}
                        <BoltIcon className="h-8 w-8"/>
                        <h2>STAN-dard</h2>
                    </div>
                    <div className="space-y-2">
                    <p className="infoText">"Be a best practitioner"</p>
                        <p className="infoText">"Follow Principles"</p>
                        <p className="infoText">"Use it right!"</p>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                        {/* Sun Icon */}
                        <ExclamationTriangleIcon className="h-8 w-8"/>
                        <h2>TIPS for Users!</h2>
                    </div>
                    <div className="space-y-2">
                    <p className="infoText">"Create lifetime Knowledge Portfolios Online"</p>
                        <p className="infoText">"Continue Improving Everyday"</p>
                        <p className="infoText">"Research on your own and reflect your results for reconciliation."</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default HomePage;