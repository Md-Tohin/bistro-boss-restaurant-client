import MenuItem from '../../../Shared/MenuItem/MenuItem';
import SectionHeading from '../../../Shared/SectionHeading/SectionHeading';

const Menu = () => {
    return (
        <div className="mb-5">
            <SectionHeading title="FROM OUR MENU" subTitle="--- Check it out ---"></SectionHeading>
            <div className="grid md:grid-cols-2 gap-2 w-10/12 mx-auto pt-5 pb-5">
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
            </div>
            <div className='text-center'>
            <button className='btn text-dark10 border-b-2 border-dark10'>View Full  Menu</button>
            </div>
        </div>
    );
};

export default Menu;