import React, { useState } from "react";

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
import { ToogleLabel, ToggleInput, Slider, ToggleContainer } from "../components/Toggle";
import { NavBar } from "../components/NavBar";

const usersData = [
  {
    id: 1,
    name: "Felicity Gallahue",
    email: "fgallahue0@desdev.cn",
    photo: "http://dummyimage.com/136x144.bmp/dddddd/000000",
    role: "Registered Nurse",
  },
  {
    id: 2,
    name: "Rosamund Auton",
    email: "rauton1@digg.com",
    photo: "http://dummyimage.com/136x527.png/dddddd/000000",
    role: "Help Desk Technician",
  },
  {
    id: 3,
    name: "Lauretta Elvy",
    email: "lelvy2@paypal.com",
    photo: "http://dummyimage.com/509x479.bmp/cc0000/ffffff",
    role: "Research Nurse",
  },
  {
    id: 4,
    name: "Demetre Pinhorn",
    email: "dpinhorn3@github.io",
    photo: "http://dummyimage.com/572x508.jpg/dddddd/000000",
    role: "Research Associate",
  },
  {
    id: 5,
    name: "Pietra Vahey",
    email: "pvahey4@trellian.com",
    photo: "http://dummyimage.com/103x429.png/cc0000/ffffff",
    role: "General Manager",
  },
  {
    id: 6,
    name: "Maynord Gregoratti",
    email: "mgregoratti5@kickstarter.com",
    photo: "http://dummyimage.com/220x486.png/dddddd/000000",
    role: "Pharmacist",
  },
  {
    id: 7,
    name: "Arleyne Ragbourn",
    email: "aragbourn6@narod.ru",
    photo: "http://dummyimage.com/191x404.png/ff4444/ffffff",
    role: "Assistant Manager",
  },
  {
    id: 8,
    name: "Jana Turpey",
    email: "jturpey7@domainmarket.com",
    photo: "http://dummyimage.com/190x432.png/cc0000/ffffff",
    role: "Information Systems Manager",
  },
  {
    id: 9,
    name: "Ianthe Cumes",
    email: "icumes8@cloudflare.com",
    photo: "http://dummyimage.com/126x599.jpg/cc0000/ffffff",
    role: "Geologist IV",
  },
  {
    id: 10,
    name: "Amelia Kearton",
    email: "akearton9@ocn.ne.jp",
    photo: "http://dummyimage.com/465x462.jpg/cc0000/ffffff",
    role: "Community Outreach Specialist",
  },
];

const productsData = [
  {
    name: "Pan tajado",
    photo:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
    category: "Panaderia",
    price: 2000,
    createdAt: "06-08-2020",
  },
  {
    name: "Pan tajado",
    photo:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
    category: "Panaderia",
    price: 2000,
    createdAt: "06-08-2020",
  },
  {
    name: "Pan tajado",
    photo:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
    category: "Panaderia",
    price: 2000,
    createdAt: "06-08-2020",
  },
  {
    name: "Pan tajado",
    photo:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
    category: "Panaderia",
    price: 2000,
    createdAt: "06-08-2020",
  },
  {
    name: "Pan tajado",
    photo:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
    category: "Panaderia",
    price: 2000,
    createdAt: "06-08-2020",
  },
  {
    name: "Pan tajado",
    photo:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
    category: "Panaderia",
    price: 2000,
    createdAt: "06-08-2020",
  },
  {
    name: "Pan tajado",
    photo:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
    category: "Panaderia",
    price: 2000,
    createdAt: "06-08-2020",
  },
  {
    name: "Pan tajado",
    photo:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
    category: "Panaderia",
    price: 2000,
    createdAt: "06-08-2020",
  },
];

export const AdminPage = () => {
  //   const [showModal, setShowModal] = useState(true);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [showEditUserModal, setShowEditUserModal] = useState(false);
  const [showEditProductModal, setShowEditProductModal] = useState(false);
  const [queryUsers, setQueryUsers] = useState("");
  const [queryProducts, setQueryProducts] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [currentProduct, setCurrentProduct] = useState({})

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

  return (
    <>
      <AdminPageContainer>
        <NavBar/>
        <AdminPageContent>
          {/* <Sidebar /> */}
          <div>
            <Table
              state={queryUsers}
              setState={setQueryUsers}
              data={usersData}
              isUser
              name="Usuarios"
              modal={openAddUserModal}
              onSelectItem={onSelectUser}
            />
            <Table
              state={queryProducts}
              setState={setQueryProducts}
              data={productsData}
              name="Productos"
              modal={openAddProductModal}
              onSelectItem={onSelectProduct}
            />
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
          photoEdit={currentProduct.photo}
          nameEdit={currentProduct.name}
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
      </Data>
    </Article>
  );
};

const CreateProduct = ({ edit, photoEdit, nameEdit, priceEdit }) => {
  const [name, setName] = useState(nameEdit?nameEdit:"Nombre del producto");
  const [photo, setPhoto] = useState(photoEdit?photoEdit:noimage);
  const [price, setPrice] = useState(priceEdit?priceEdit:"$");

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
          <Label htmlFor="price">Precio producto</Label>
          <Input
            id="price"
            type="number"
            onChange={(e) => setPrice(`$${e.target.value}`)}
          />
          <Label htmlFor="photo">Selecciona la imagen del producto</Label>
          <FileUploader handleFile={handleFile} />
        </Form>
        <Product photo={photo} name={name} price={price} />
      </ContainerCreate>
      <br />
      {edit ? (
        <Button>Editar producto</Button>
      ) : (
        <Button>Crear producto</Button>
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
            <ToggleInput type="checkbox"/>
            <Slider />
          </ToogleLabel>
          </ToggleContainer>
          
        </Form>
        <Product photo={photo} name={name} price={role} />
      </ContainerCreate>
      <br />
      {
        edit
        ?<Button>Editar usuario</Button>
        :<Button>Crear usuario</Button>
      }
      
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
