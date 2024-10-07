import { Row } from "antd";

const Home = (props: any) => {
    return (<Row>
        <p>
               Sol tarafta yer alan navigate içerisinde müşteri sekmesinde müşteri oluşturulur. oluşturulan müşteri bilgileri tabloda listelenir düzenlenebilir ve silinebilir (?) 
               </p>

               <p>
               Sol tarafta yer alan navigate içerisinde ürün sekmesinde ürün oluşturulur. oluşturulan ürün bilgileri tabloda listelenir düzenlenebilir ve silinebilir (?) 
               </p>

               <p>
               Sol tarafta yer alan navigate içerisinde satış sekmesinde satış oluşturulur. Oluşturulan satış daha önceden oluşturulmuş ürün ve müşteriyle ilişkilendirelerek listelenir 
               </p>
    </Row>);
};

export default Home;