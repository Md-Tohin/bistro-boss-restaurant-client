import PropTypes from 'prop-types';

const Category = ({category}) => {
    const {name, image} = category;
    return (
        <>
            <div className="relative  flex justify-center items-center mb-12">
                <img src={image} alt="" className='object-fill h-80 w-full' />
                <div className="absolute inset-0 flex items-center justify-center hover:bg-black hover:bg-opacity-50 transition-all duration-300">
                    <p className='absolute bottom-6 text-white text-xl uppercase bg-black bg-opacity-30 py-1 px-5 rounded-md'>{name}</p>
                </div>               
            </div>
        </>
    );
};

export default Category;

Category.propTypes = {
    category: PropTypes.object,
}