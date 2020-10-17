import React, { useState } from "react";
import {
  ItemContainer,
  IconItem,
  IconLeft,
  IconRight,
  PrimaryText,
  SecondaryText,
  TableContainer,
  TableContent,
  HeaderTable,
  ContainerButtons,
} from "../styles/components/Table";
import { Button } from "../components/Buttons";
import { Input } from "../styles/components/Forms";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

export const Table = ({
  state,
  setState,
  isUser,
  name,
  data,
  modal,
  onSelectItem,
}) => {
  const [showLess, setShowLess] = useState(false);

  return (
    <TableContainer>
      <HeaderTable>
        <PrimaryText>{name}</PrimaryText>
        <ContainerButtons>
          <Button onClick={modal} mr_1>
            Agregar {name}
          </Button>
          {showLess ? (
            <MdExpandMore onClick={() => setShowLess(false)} size="40px" />
          ) : (
            <MdExpandLess onClick={() => setShowLess(true)} size="40px" />
          )}
        </ContainerButtons>
      </HeaderTable>
      <Input placeholder="Buscar" onChange={(e) => setState(e.target.value)} />
      <TableContent>
        
        {showLess && state === "" 
          ? null
          : data
              .filter((value) => {
                console.log(value);
                if (isUser === true) {
                  return value.email
                    .toLowerCase()
                    .includes(state.toLowerCase());
                }
                return value.productName.toLowerCase().includes(state.toLowerCase());
              })
              .map((value, index) => (
                <ItemTable
                  onSelectItem={() => onSelectItem(value)}
                  isUser={isUser}
                  key={index}
                  {...value}
                />
              ))}
      </TableContent>
    </TableContainer>
  );
};

const ItemTable = ({
  isUser,
  role,
  productPhoto,
  email,
  productName,
  category,
  price,
  createdAt,
  onSelectItem,
}) => {
  return (
    <ItemContainer onClick={onSelectItem}>
      <IconLeft>
        <IconItem
          src={
            productPhoto
              ? productPhoto
              : "https://firebasestorage.googleapis.com/v0/b/idealbuy-af400.appspot.com/o/defaultprofile.jpeg?alt=media&token=bf9ab868-d9e7-4eb5-b78a-d55392857064"
          }
          alt="IconItem"
        />
        <div>
          {isUser ? (
            <PrimaryText>{email}</PrimaryText>
          ) : (
            <PrimaryText>{productName}</PrimaryText>
          )}
          <SecondaryText>{isUser ? role : category}</SecondaryText>
        </div>
      </IconLeft>

      <IconRight>
        <PrimaryText>{price}</PrimaryText>
        <SecondaryText>{createdAt}</SecondaryText>
      </IconRight>
    </ItemContainer>
  );
};
