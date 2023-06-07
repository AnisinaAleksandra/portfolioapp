import cls from './MainPage.module.scss';
const MainPage = () => {
    return (
        <div  className={cls.main_page}>
            <div className={cls.left_side}>
               <div className={cls.head_text}>
               <span className={cls.orange_text}>I create products</span>
               <div className={cls.description_text}>that delight and inspire people.</div>
               </div>

               <div className={cls.bottom_text}>Hi! I’m Alex, a web developer based in Tbilisi, Georgia. I create user-friendly application for fast-growing startups and big companies.</div>
            </div>
        <div  className={cls.right_side_foto}>
</div>
        </div>
    );
};

export default MainPage;
