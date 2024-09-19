// Interfaces
import { IProduct } from '@/interface';

// Constants
import { montserrat, TYPE } from '@/constants';

// Components
import { Button, Photo } from '@/ui/components';

interface ProductSectionProps {
  data: IProduct[];
}

const ProductSection = ({ data }: ProductSectionProps) => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 w-5/6 gap-6 mx-auto">
      {data.map((item) => (
        <div key={item.id} className="flex flex-col">
          <div className="xl:w-pro-lg xl:h-pro-lg md:w-pro-md md:h-pro-md w-pro-sm h-pro-sm mx-auto">
            <Photo src={item.image} alt={item.name} autoSize isCircle isBlur>
              <div className="w-full">
                <div className="w-10 h-icon-sm mx-auto">
                  <Photo
                    src="/view.svg"
                    alt="view icon"
                    autoSize
                    styles="md:block hidden"
                  />
                </div>
                <div className="flex justify-center items-center gap-3 md:mt-10 mt-0">
                  <div className="w-full h-3 md:w-icon-sm md:h-icon-xs ">
                    <Photo src="/view.svg" alt="view icon" autoSize />
                  </div>
                  <span className="text-sm">{item.view}</span>
                </div>
              </div>
            </Photo>
          </div>
          <div className="mt-4 md:h-32 overflow-hidden text-center">
            <p
              className={`${montserrat.className} font-bold lg:text-lg text-base`}
            >
              {item.name}
            </p>
            <span className="my-3">by</span>
            <p className="lg:text-base text-sm mt-3">{item.users.join(', ')}</p>
          </div>
          <Button name="Review" variant={TYPE.SECOND} styles="mt-5 mx-auto" />
        </div>
      ))}
    </div>
  );
};

export default ProductSection;
