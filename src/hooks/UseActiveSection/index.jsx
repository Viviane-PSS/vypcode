// useActiveSection.js
import { useEffect, useState } from "react";

/**
 * Hook customizado para determinar qual seção está atualmente visível na viewport.
 * @param {string[]} sectionIds - Um array com os IDs das seções (ex: ['secao1', 'secao2'])
 * @param {string} rootMargin - Margin para o Intersection Observer (ex: '0px 0px -50% 0px')
 * @returns {string} O ID da seção atualmente ativa.
 */
const UseActiveSection = (sectionIds, rootMargin = "0px 0px -50% 0px") => {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Define o ID da seção que está cruzando o threshold
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin,
        threshold: 0.1, // Quando 10% da seção estiver visível
      }
    );

    // Observa cada seção pelo seu ID
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Função de cleanup: Desconecta o observer quando o componente desmonta
    return () => {
      observer.disconnect();
    };
  }, [sectionIds, rootMargin]); // O array de dependências garante que o hook roda apenas quando os IDs mudam

  return activeId;
};

export default UseActiveSection;
