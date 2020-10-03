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

export const Table = ({ state, setState, isUser, name, data,modal }) => {
  const [showLess, setShowLess] = useState(false);

  return (
    <TableContainer>
      <HeaderTable>
        <PrimaryText>{name}</PrimaryText>
        <ContainerButtons>
          <Button onClick={modal} mr_1>Agregar {name}</Button>
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
              .filter((value) =>
                value.name.toLowerCase().includes(state.toLowerCase())
              )
              .map((value, index) => (
                <ItemTable isUser={isUser} key={index} {...value} />
              ))}
      </TableContent>
    </TableContainer>
  );
};

const ItemTable = ({
  isUser,
  role,
  photo,
  name,
  category,
  price,
  createdAt,
}) => {
  return (
    <ItemContainer>
      <IconLeft>
        <IconItem src={photo} alt="IconItem" />
        <div>
          <PrimaryText>{name}</PrimaryText>
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
