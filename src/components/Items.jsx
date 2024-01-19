import SkeletonCard from './SkeletonCard';
import ItemCard from './ItemCard';

function Items({items,isSignClicked,onViewClick,onWishlist}) {

  return (
    <>
      {items ? (
        <div className="bg-pink-100 px-2 md:px-28 lg:px-36 gap-8 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-8">
          {items.map((item, index) => (
            <ItemCard
              key={index}
              itemName={item.name}
              itemPrice={item.price}
              itemIsSold={item.isSold}
              showViewBtn={!item.isSold}
              showWishlistBtn={true}
              itemImgUrl={item.imageUrl ? item.imageUrl : ''}
              isSignClicked={isSignClicked}
              onWishlist={() => onWishlist(item)}
              onViewClick={() => onViewClick(item)}
            />
          ))}
        </div>
      ) : (
        <div className="bg-red-50 px-2 md:px-28 lg:px-40 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-8">
          <SkeletonCard />
          <SkeletonCard /> <SkeletonCard /> <SkeletonCard /> <SkeletonCard />
          <SkeletonCard /> <SkeletonCard /> <SkeletonCard /> <SkeletonCard />
          <SkeletonCard /> <SkeletonCard /> <SkeletonCard /> <SkeletonCard />
        </div>
      )}
    </>
  );
}

export default Items;