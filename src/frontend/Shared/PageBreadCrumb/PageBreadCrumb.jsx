import { PropTypes } from 'prop-types';

const PageBreadCrumb = ({image, title, subTitle}) => {
    return (
        <div className="h-96 w-full relative">
            <img src={image} alt="Image" className='w-full h-full object-fill' />
            <div className="font-serif absolute left-[20%] top-[40%] py-10 w-3/5 bg-black bg-opacity-30 text-center text-white">
                <h1 className='text-6xl font-bold uppercase'>{title}</h1>
                <div className="uppercase text-sm">{subTitle}</div>
            </div>
        </div>
    );
};

export default PageBreadCrumb;


PageBreadCrumb.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
}