const StatCard = ({ title, value }) => {
    return (
        <div className="
      rounded-xl p-6 shadow-md hover:shadow-lg cursor-pointer
      bg-white/5 border border-white/10
       hover:border-black hover:scale-105 transform transition-all duration-300
    ">
            <p className="text-sm text-gray-900">
                {title}
            </p>
            <h3 className="text-3xl font-bold text-black mt-2">
                {value}
            </h3>
        </div>
    );
};

export default StatCard;
