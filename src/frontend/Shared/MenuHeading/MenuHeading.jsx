import { PropTypes } from 'prop-types';

const MenuHeading = ({image, title, subTitle}) => {
    return (
        <div className="h-96 w-full relative">
            <img src={image} alt="Image" className='w-full h-full object-cover' />
            <div className="font-serif absolute left-[25%] top-[30%] px-10 py-10 w-1/2 bg-black bg-opacity-30 text-center text-white">
                <h1 className='text-2xl font-semibold py-2 uppercase'>{title}</h1>
                <div className="text-sm">{subTitle}</div>
            </div>
        </div>
    );
};

export default MenuHeading;

MenuHeading.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
}