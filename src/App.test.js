import React from 'react';
import App from './App';
import { shallow } from "enzyme";

describe("Testing App", () => {
    const wrapper = shallow(<App />);

    test("renders a single child element", () => {
        expect(wrapper.children().length).toBe(1);
    });

    test("renders 11 routes", () => {
        expect(wrapper.find("Route").length).toBe(11);
    });

    test("check '/admin' route", () => {
        expect(wrapper.find("Route[path='/admin']").length).toBe(1);
    });

    test("check '/user' route", () => {
        expect(wrapper.find("Route[path='/user']").length).toBe(1);
    });
    test("check '/new-recipe' route", () => {
        expect(wrapper.find("Route[path='/new-recipe']").length).toBe(1);
    });

    test("check '/register' route", () => {
        expect(wrapper.find("Route[path='/register']").length).toBe(1);
    });
    
    test("check '/recipe-page' route", () => {
      expect(wrapper.find("Route[path='/recipe-page']").length).toBe(1);
    });
    
    test("check '/dev-user' route", () => {
      expect(wrapper.find("Route[path='/dev-user']").length).toBe(1);
    });
    
    test("check '/dev-recipe' route", () => {
      expect(wrapper.find("Route[path='/dev-recipe']").length).toBe(1);
    });
    
    test("check '/dev-ingredient' route", () => {
      expect(wrapper.find("Route[path='/dev-ingredient']").length).toBe(1);
    });

    test("check '/edit-recipe' route", () => {
      expect(wrapper.find("Route[path='/edit-recipe']").length).toBe(1);
    });

    test("check '/user' corresponding to UserRecipe", () => {
      expect(
        wrapper.find("Route[path='/user']").contains("UserRecipe")
      );
    });

    test("check '/user' corresponding to RecipeBook", () => {
      expect(
        wrapper.find("Route[path='/user']").contains("RecipeBook")
      );
    });

    test("check '/' corresponding to RecipeResults", () => {
      expect(
        wrapper.find("Route[path='/']").contains("RecipeResults")
      );
    });

    test("check '/' corresponding to Basket", () => {
      expect(
        wrapper.find("Route[path='/']").contains("Basket")
      );
    });

    test("check '/' corresponding to AddToBasketForm", () => {
      expect(
        wrapper.find("Route[path='/']").contains("AddToBasketForm")
      );
    });

    test("check '/' corresponding to RecipeRow", () => {
      expect(
        wrapper.find("Route[path='/']").contains("RecipeRow")
      );
    });
    
    test("check '/' corresponding to NonUserRadio", () => {
      expect(
        wrapper.find("Route[path='/']").contains("NonUserRadio")
      );
    });

    test("check '/' corresponding to UserRadio", () => {
      expect(
        wrapper.find("Route[path='/']").contains("UserRadio")
      );
    });

    test("check '/' corresponding to BasketRow", () => {
      expect(
        wrapper.find("Route[path='/']").contains("BasketRow")
      );
    }); 
    
    test("check '/' corresponding to UserButton", () => {
      expect(
        wrapper.find("Route[path='/']").contains("UserButton")
      );
    }); 
    
    test("check '/' corresponding to LogoutButton", () => {
      expect(
        wrapper.find("Route[path='/']").contains("LogoutButton")
      );
    }); 
    
    test("check '/' corresponding to LoginButton", () => {
      expect(
        wrapper.find("Route[path='/']").contains("LoginButton")
      );
    });
    
    test("check '/' corresponding to RegisterForm", () => {
      expect(
        wrapper.find("Route[path='/recipe-book']").contains("RegisterForm")
      );
    });
    
    test("check '/' corresponding to CloseModalButton", () => {
      expect(
        wrapper.find("Route[path='/recipe-book']").contains("CloseModalButton")
      );
    }); 
    
    test("check '/' corresponding to RegisterModal", () => {
      expect(
        wrapper.find("Route[path='/recipe-book']").contains("RegisterModal")
      );
    }); 
        
    test("check '/' corresponding to LoginForm", () => {
      expect(
        wrapper.find("Route[path='/recipe-book']").contains("LoginForm")
      );
    }); 
        
    test("check '/' corresponding to Modal", () => {
      expect(
        wrapper.find("Route[path='/recipe-book']").contains("Modal")
      );
    }); 
});