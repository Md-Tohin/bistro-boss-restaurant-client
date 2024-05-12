import PropTypes from 'prop-types';

const SectionHeading = ({title, subTitle, color=''}) => {
    return (
        <div>
            <div className="w-1/4 mx-auto text-center mt-6 mb-5">
                <p className="text-yellowLight text-sm pb-1 tracking-[0.5px]">{subTitle}</p>
                <h1 className={`${color ? 'text-'+color : "text-dark01"}  text-xl font-bold border-y-2 py-3 tracking-[1px]`}>{title}</h1>
            </div>
        </div>
    );
};

export default SectionHeading;

SectionHeading.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    color: PropTypes.string,
}

