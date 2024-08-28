
const Text = () => {
    return (

        <div className="relative bg-white overflow-hidden">
            <div className="marquee-content flex space-x-3 animate-marquee whitespace-nowrap ">
                <span className="text-red-600 font-bold text-5xl">VICIO - BURGER CLUB- <span className="bg-red-600 text-red-600">.........</span></span>
                {/* Repeat the content to ensure continuous scrolling */}
                <span className="text-red-600 font-bold text-5xl">VICIO - BURGER CLUB- <span className="bg-red-600 text-red-600">.........</span></span>
            </div>
        </div>

    );

};

export default Text;