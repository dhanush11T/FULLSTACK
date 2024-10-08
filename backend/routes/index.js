const express = require("express");
const router = express.Router();
const userSignupController = require("../controller/user/userSignUp");
const userSignInController = require("../controller/user/userSignin");
const userDetailsController = require("../controller/user/userDetails");
const authToken = require("../middleware/authToken");
const getProductController = require("../controller/user/getProduct");
const UploadProductController = require("../controller/user/uploadProduct");
const allUsers = require("../controller/user/allUsers");
const countAddToCartController = require("../controller/user/countAddToCartProduct");
const userAddtocartController = require("../controller/user/addToCartController");
const getProductDetailsController = require("../controller/user/getProductDetails");
const getCategoryProductController = require("../controller/user/getCategoryProduct");
const updateProductController = require("../controller/user/updateAddToCartProduct");
const updateUser = require("../controller/user/updateUser");
const userLogout = require("../controller/user/userLogout");
const filterProductController = require("../controller/user/filterProductController");

const getCategoryWiseProductController = require("../controller/user/getCategoryWiseProduct");
const addToCartViewProduct = require("../controller/user/addToCartViewProduct");
const deleteAddToCartProduct = require("../controller/user/deleteAddToCartProduct");
const searchProduct = require("../controller/user/searchProduct");
router.post("/signup", userSignupController);
router.get("/searchProduct", searchProduct);
router.post("/delete-cart-product", authToken, deleteAddToCartProduct);
router.post("/Login", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/userLogout", userLogout);
router.post("/filter-product", filterProductController);

router.post("/update-cart-product", authToken, updateProductController);
router.get("/view-cart-product", authToken, addToCartViewProduct);
router.get("/countAddToCart", authToken, countAddToCartController);
router.post("/addtocart", authToken, userAddtocartController);
router.post("/upload-product", authToken, UploadProductController);
router.get("/all-user", authToken, allUsers);
router.post("/product-details", getProductDetailsController);
router.post("/update-user", authToken, updateUser);
router.get("/get-product", getProductController);
router.post("/category-Product", getCategoryWiseProductController);
router.get("/get-categoryProduct", getCategoryProductController);
router.post("/update-product", authToken, updateProductController);
module.exports = router;
