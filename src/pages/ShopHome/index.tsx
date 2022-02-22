import CategoryList from '../../component/CategoryList/CategoryList';

interface Props {
  CategoryLists: {
    id:any;
    category: string;
    picture: string;
    name: string;
    description: string;
    price: number;
  }[];
}

const ShopHome: React.FC<Props> = ({ CategoryLists }) => {
  return <CategoryList CategoryLists={CategoryLists} />;
};

export default ShopHome;
