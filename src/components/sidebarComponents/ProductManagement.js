import React,{useState,useEffect} from "react";
import TableHeader from "../tableHeader/TableHeader"
import TableComponent from "../tableComponent/TableComponent";

import Modalcomp from "../helpers/modalcomp/ModalComp";
import Productview from "../Product/productview";
import Productedit from "../Product/productedit";
import {useDispatch,connect} from "react-redux";
import {getProductDetails} from "../../actions/products";

const ProductManagement = ({ products,allproducts }) => {


    const [viewModal,setViewModal] = useState(false)
    const [editModal,setEditModal] = useState(false)
    const [productView,setProductView] = useState(false)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductDetails())
    },[])
    

    const modelopen = (data,id) => {

        let productView = allproducts && allproducts.length > 0 && allproducts.find(prod => prod.productId === id)
        setProductView(productView)

        if(data === "view") {
           
           setViewModal(true)   
        } 

        if(data === "edit") {
            setEditModal(true)
        }
     }


 
 
     const handleClose = () => {
         setViewModal(false)
         setEditModal(false)
     }

    return(
        <div className="main-content">
        <TableHeader title="Product"/>

        <div className="main-content-details">
        <TableComponent
         heading={[
            { id: "", label: "S.No" },
            { id: "productid", label: "Product Id" },
            { id: "category", label: "Category" },
            { id: "subcategory", label: "SubCategory" },
            { id: "productname", label: "Product Name" },             
            { id: "", label: "Action" }
        ]}
   
       
        rowdata={products && products.length > 0 ? products : []}
    
        // actionclose="close"
        DeleteIcon="close"
        
        UploadIcon="close"
        GrandTotal="close"
        Workflow="close"
        checkbox="close"
        pdfDownload="close"

        modelopen={(e,id) => modelopen(e,id)}
        // props_loading={this.state.props_loading}
        specialProp={true} 
/>
        </div>

        {viewModal && <Modalcomp xswidth={"md"} clrchange="textclr" title="Product View"  visible={viewModal} closemodal={handleClose} >
            
            <Productview productView={productView} />
        </Modalcomp>}

        {editModal && <Modalcomp xswidth={"md"} clrchange="textclr" title="Product Edit"  visible={editModal} closemodal={handleClose}>
            <Productedit productView={productView} closemodal={handleClose} />
        </Modalcomp>}

    </div>
    )
}

const mapStateToProps = state => ({
    products:state.products.products,
    allproducts:state.products.allproducts
})

export default connect(mapStateToProps)(ProductManagement);