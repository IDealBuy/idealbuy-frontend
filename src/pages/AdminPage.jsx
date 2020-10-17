import React, { useEffect, useState } from "react";

// import { Redirect } from "react-router-dom";

import Modal from "../components/Modal";
import { Table } from "../components/Table";
import {
  AdminPageContent,
  AdminPageContainer,
} from "../styles/pages/adminpage";
import { BsCardImage } from "react-icons/bs";
import {
  Article,
  Img,
  Data,
  Name,
  Price,
  //   Button,
  ContainerCreate,
  Form,
  Label,
  Div,
  TitleCreate,
} from "../styles/components/Product";
import { Input } from "../styles/components/Forms";
import { Button } from "../components/Buttons";
import noimage from "../assets/noimage.jpg";
import {
  ToogleLabel,
  ToggleInput,
  Slider,
  ToggleContainer,
} from "../components/Toggle";
import Skeleton from "react-loading-skeleton";

//graphql
import { gql } from "apollo-boost";
import { Sidebar } from "../components/Sidebar";
import { useMutation, useQuery } from "@apollo/client";
import { getAllUsers } from "../utils/userManage";

// const productsData = [
//   {
//     name: "Pan tajado",
//     photo:
//       "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
//     category: "Panaderia",
//     price: 2000,
//     createdAt: "06-08-2020",
//   },
//   {
//     name: "Pan tajado",
//     photo:
//       "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
//     category: "Panaderia",
//     price: 2000,
//     createdAt: "06-08-2020",
//   },
//   {
//     name: "Pan tajado",
//     photo:
//       "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
//     category: "Panaderia",
//     price: 2000,
//     createdAt: "06-08-2020",
//   },
//   {
//     name: "Pan tajado",
//     photo:
//       "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
//     category: "Panaderia",
//     price: 2000,
//     createdAt: "06-08-2020",
//   },
//   {
//     name: "Pan tajado",
//     photo:
//       "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
//     category: "Panaderia",
//     price: 2000,
//     createdAt: "06-08-2020",
//   },
//   {
//     name: "Pan tajado",
//     photo:
//       "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
//     category: "Panaderia",
//     price: 2000,
//     createdAt: "06-08-2020",
//   },
//   {
//     name: "Pan tajado",
//     photo:
//       "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
//     category: "Panaderia",
//     price: 2000,
//     createdAt: "06-08-2020",
//   },
//   {
//     name: "Pan tajado",
//     photo:
//       "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
//     category: "Panaderia",
//     price: 2000,
//     createdAt: "06-08-2020",
//   },
// ];

export const AdminPage = () => {
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [showEditUserModal, setShowEditUserModal] = useState(false);
  const [showEditProductModal, setShowEditProductModal] = useState(false);
  const [queryUsers, setQueryUsers] = useState("");
  const [queryProducts, setQueryProducts] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [currentProduct, setCurrentProduct] = useState({});
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [dataUsers, setDataUsers] = useState([]);

  const onSelectUser = (params) => {
    console.log(params);
    setCurrentUser(params);
    setShowEditUserModal(true);
  };
  const onSelectProduct = (params) => {
    console.log(params);
    setCurrentProduct(params);
    setShowEditProductModal(true);
  };

  const closeEditProductModal = () => {
    setShowEditProductModal(false);
  };
  const closeEditUserModal = () => {
    setShowEditUserModal(false);
  };
  const closeAddProductModal = () => {
    setShowAddProductModal(false);
  };

  const openAddProductModal = () => {
    setShowAddProductModal(true);
  };

  const closeAddUserModal = () => {
    setShowAddUserModal(false);
  };

  const openAddUserModal = () => {
    setShowAddUserModal(true);
  };

  const getAllProducts = gql`
    query {
      allProducts {
        id
        productName
        productUnit
        productPhoto
        category
      }
    }
  `;

  useEffect(() => {
    getAllUsers().then((e) => {
      setDataUsers(e);
      setLoadingUsers(false);
    });
  }, []);

  const { loading, error, data } = useQuery(getAllProducts);
  if (!loading) {
    console.log(data.allProducts);
  }
  if (error && loadingUsers) {
    console.log(error);
  }
  return (
    <>
      <AdminPageContainer>
        <Sidebar />
        <AdminPageContent>
          {/* <Sidebar /> */}
          <div>
            {loading ? (
              <>
                <Skeleton key={1} height="350px" />
                <Skeleton key={2} height="350px" />
                <Skeleton key={3} height="350px" />
                <Skeleton key={4} height="350px" />
                <Skeleton key={5} height="350px" />
                <Skeleton key={6} height="350px" />
              </>
            ) : (
              <Table
                state={queryUsers}
                setState={setQueryUsers}
                data={dataUsers}
                isUser
                name="Usuarios"
                modal={openAddUserModal}
                onSelectItem={onSelectUser}
              />
            )}
            {loading ? (
              <>
                <Skeleton key={1} height="350px" />
                <Skeleton key={2} height="350px" />
                <Skeleton key={3} height="350px" />
                <Skeleton key={4} height="350px" />
                <Skeleton key={5} height="350px" />
                <Skeleton key={6} height="350px" />
              </>
            ) : (
              <Table
                state={queryProducts}
                setState={setQueryProducts}
                data={data.allProducts}
                name="Productos"
                modal={openAddProductModal}
                onSelectItem={onSelectProduct}
              />
            )}
          </div>
        </AdminPageContent>
      </AdminPageContainer>
      <Modal handleClose={closeAddProductModal} isOpen={showAddProductModal}>
        <CreateProduct />
      </Modal>
      <Modal handleClose={closeAddUserModal} isOpen={showAddUserModal}>
        <CreateUser />
      </Modal>
      <Modal handleClose={closeEditUserModal} isOpen={showEditUserModal}>
        <CreateUser
          edit
          photoEdit={currentUser.photo}
          nameEdit={currentUser.name}
          roleEdit={currentUser.role}
        />
      </Modal>
      <Modal handleClose={closeEditProductModal} isOpen={showEditProductModal}>
        <CreateProduct
          edit
          photoEdit={currentProduct.productPhoto}
          nameEdit={currentProduct.productName}
          priceEdit={currentProduct.price}
        />
      </Modal>
    </>
  );
};

export const Product = ({ photo, name, price, categories }) => {
  return (
    <Article>
      <Img src={photo} alt="" />
      <Data>
        <Name>{name}</Name>
        <Price>{price}</Price>
        <Price>{price}</Price>
      </Data>
    </Article>
  );
};

const CreateProduct = ({ edit, photoEdit, nameEdit, priceEdit, unitEdit }) => {
  const [name, setName] = useState(nameEdit ? nameEdit : "Nombre del producto");
  const [photo, setPhoto] = useState(
    photoEdit
      ? photoEdit
      : "https://firebasestorage.googleapis.com/v0/b/idealbuy-af400.appspot.com/o/noimage.jpg?alt=media&token=7776fb06-a750-47f2-9a39-7e81429e3f47"
  );

  const [unit, setUnit] = useState(unitEdit ? unitEdit : "0g");
  const [category, setCategory] = useState(unitEdit ? unitEdit : "Varios");

  const createProduct = gql`
    mutation(
      $name: String!
      $unit: String!
      $category: String!
      $photo: String!
    ) {
      createProd(
        productName: $name
        productUnit: $unit
        category: $category
        productPhoto: $photo
      ) {
        ok
      }
    }
  `;

  const [addProduct, { data }] = useMutation(createProduct);

  const setTheCategory = (category) => {
    if (data) {
      setCategory(category);
    }
  };

  const handleFile = (fileUploaded) => {
    setPhoto(URL.createObjectURL(fileUploaded));
  };

  return (
    <Div>
      <ContainerCreate>
        <Form>
          {edit ? (
            <TitleCreate>Editar producto</TitleCreate>
          ) : (
            <TitleCreate>Crear producto</TitleCreate>
          )}
          <Label htmlFor="name">Nombre del producto</Label>
          <Input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <Label htmlFor="price">Peso del producto</Label>
          <Input
            id="unit"
            type="text"
            onChange={(e) => setUnit(e.target.value)}
          />
          <Label htmlFor="photo">Selecciona la imagen del producto</Label>
          <FileUploader handleFile={handleFile} />
        </Form>
        <Product photo={photo} name={name} price={unit} />
      </ContainerCreate>
      <br />
      {edit ? (
        <Button onClick={setTheCategory}>Editar producto</Button>
      ) : (
        <Button
          onClick={(e) => {
            e.preventDefault();
            addProduct({
              variables: {
                name: name,
                unit: unit,
                category: category,
                photo: photo,
              },
            });
            console.log("crear");
          }}
        >
          Crear producto
        </Button>
      )}
    </Div>
  );
};

const CreateUser = ({ edit, photoEdit, nameEdit, roleEdit }) => {
  const [name, setName] = useState(nameEdit ? nameEdit : "Nombre del usuario");
  const [photo, setPhoto] = useState(photoEdit ? photoEdit : noimage);
  const [role, setRole] = useState(roleEdit ? roleEdit : "Role");

  const handleFile = (fileUploaded) => {
    setPhoto(URL.createObjectURL(fileUploaded));
  };
  return (
    <Div>
      <ContainerCreate>
        <Form>
          {edit ? (
            <TitleCreate>Editar usuario</TitleCreate>
          ) : (
            <TitleCreate>Crear usuario</TitleCreate>
          )}
          <Label htmlFor="name">Nombre del usuario</Label>
          <Input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <Label htmlFor="role">Role del usuario</Label>
          <Input
            id="role"
            type="text"
            onChange={(e) => setRole(`${e.target.value}`)}
          />
          <Label htmlFor="photo">Selecciona la foto de perfil</Label>
          <FileUploader handleFile={handleFile} />
          <ToggleContainer>
            <p>Estado</p>
            <ToogleLabel>
              <ToggleInput type="checkbox" />
              <Slider />
            </ToogleLabel>
          </ToggleContainer>
        </Form>
        <Product photo={photo} name={name} price={role} />
      </ContainerCreate>
      <br />
      {edit ? <Button  >Editar usuario</Button> : <Button>Crear usuario</Button>}
    </Div>
  );
};

const FileUploader = (props) => {
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };
  return (
    <>
      <Button secondary onClick={handleClick}>
        <BsCardImage size="20px" />
      </Button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </>
  );
};
