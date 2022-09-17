import { useState } from "react"
import { DrawerList } from "../../components/drawer-list/DrawerList"
import { Drawer } from "../../components/drawer/Drawer"
import { GenericContainer } from "../../components/generic-container/GenericContainer"
import { Header } from "../../components/header/Header"
import { PageTitle } from "../../components/titles/PageTitle"

export const Home: React.FC<{}> = () => {
  return (
    <GenericContainer>
      <PageTitle value="Home" />
    </GenericContainer>
  )
}