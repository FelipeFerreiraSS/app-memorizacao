import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import AddCards from "../components/AddCards.js";
import LevelUser from "../components/LevelUser.js";
import Header from "../components/Header.js";

describe('AddCards Component', () => {
  it("deve receber as props corretamente", () => {
    const word = "Palavra";
    const setWord = jest.fn();
    const translation = "Tradução";
    const setTranslation = jest.fn();
    const handleButtonClick = jest.fn();

    const { getByPlaceholderText } = render(
      <AddCards
        word={word}
        setWord={setWord}
        translation={translation}
        setTranslation={setTranslation}
        handleButtonClick={handleButtonClick}
      />
    );

    expect(screen.getByPlaceholderText("Add word")).toHaveValue(word);
    expect(screen.getByPlaceholderText("Add translation")).toHaveValue(translation);
    expect(setWord).toBeDefined();
    expect(setTranslation).toBeDefined();
    expect(handleButtonClick).toBeDefined();
  });

  it('deve chamar a função handleButtonClick quando o botão é clicado', () => {
    const handleButtonClick = jest.fn();
    const { getByText } = render(<AddCards handleButtonClick={handleButtonClick} />);
   
    fireEvent.click(getByText("Adicionar"));
    expect(handleButtonClick).toHaveBeenCalledTimes(1);
  });
});

describe('LevelUser Component', () => {
  it("Verifica se exibe o nível do usuário", () => {
    const allActivities = {
	    1: {
	      counter: 500
	    }
	  };
	  render(
	    <LevelUser 
	      allActivities={allActivities}
	    />
	  );

	  const userLevelElement = screen.getByText(/Nível \d+/i);
	  expect(userLevelElement).toBeInTheDocument();
	  expect(screen.getByText(`500xp / 600xp`)).toBeInTheDocument();
  });

  it('Verifica se exibe a barra de progresso', () => {
	  const allActivities = {
	    1: {
	      counter: 510
	    }
	  };
	  render(
	    <LevelUser 
	      allActivities={allActivities}
	    />
	  );

	 	const element = screen.getByTestId('custom-element')
	  expect(element).toBeInTheDocument();
	});
});

describe("Header Component", () => {
  it("should toggle mobile dropdown menu when the button is clicked", () => {
    render(<Header />);
    const toggleButton = screen.getByTestId("mobile-menu-toggle")
    // Click the toggle button to show the dropdown
    fireEvent.click(toggleButton);

    const mobileMenu = screen.getByTestId('mobile-menu')
	  expect(mobileMenu).toBeInTheDocument();
    

    const toggleButtonClose = screen.getByTestId("mobile-menu-toggle-close")
    // Click the toggle button again to hide the dropdown
    fireEvent.click(toggleButtonClose);
  });
});

{/**describe("Game Component", () => {
  it("Renderizar o componente Game com informações corretas", () => {
    const card = 'card_id';
	  const isOpen = true;
	  const onClose = jest.fn();
	  const originalWord = 'cachorro';
	  const translatedWord = 'dog';
	  const imageUrl = 'https://images.unsplash.com/photo-1496982411516-bfb7eb1c74e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODYzODl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTM0MjAxNjB8&ixlib=rb-4.0.3&q=80&w=1080';

	  render(
	    <Game
	      allCards={{}}
	      card={card}
	      isOpen={isOpen}
	      onClose={onClose}
	      originalWord={originalWord}
	      translatedWord={translatedWord}
	      imageUrl={imageUrl}
	    />
	  );

	  expect(screen.getByText(`Qual é a tradução para a palavra: ${originalWord}`)).toBeInTheDocument();
	  expect(screen.getByAltText('Home')).toHaveAttribute('src', imageUrl);
	  expect(screen.getByText('Verificar')).toBeInTheDocument();
  });
});**/}

{/**describe('Cards Component', () => {
  it("deve os renderizar os cards corretamente", () => {
  	const edit = jest.fn();
  	const edittedValue = jest.fn();
  	const setEdittedValue = jest.fn();
  	const handleEditCard = jest.fn();
  	const handleAddEdit = jest.fn();
  	const handleDelete = jest.fn();
  	
  	const allActivities = {
	    1: {
	      timeCard: "23/08",
	      word: "gato",
	      image: "https://images.unsplash.com/photo-1496982411516-bfb7eb1c74e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODYzODl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTM0MjAxNjB8&ixlib=rb-4.0.3&q=80&w=1080",
	      translation: "cat"
	    }
	  };
	  render(
	    <Cards 
	      allActivities={allActivities}
	      card={1}
	      edit={edit}
	      edittedValue={edittedValue}
	      handleEditCard={handleEditCard}
	      handleAddEdit={handleAddEdit}
	      handleDelete={handleDelete}
	    />
	  );

	  expect(screen.getByText("gato")).toBeInTheDocument();
    
  });
});**/}

{/**describe('ActivityChart Component', () => {
  it("Verifica grafico", () => {
    const allActivities = {
	    1: {
	      counter: 7,
	      day: '24/06'
	    },
	    2: {
	      counter: 10,
	      day: '27/06'
	    }
	  };
	  render(
	    <ActivityChart 
	    	isOpen={true}
	    	onClose={true}
	      allActivities={allActivities}
	    />
	  );

	  expect(screen.getByText('Atividades nos Últimos 7 Dias')).toBeInTheDocument();
  });
});**/}
