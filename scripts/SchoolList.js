document.addEventListener("click", (clickEvent) => {
  const schoolClicked = clickEvent.target;

  if (schoolClicked.dataset.type === "school") {
    const detailsHtml = `
      <div>
        <h4>Description:</h4>
        <h4>Disclaimer:</h4>
        <h4>Currently accepting the following Magician Types:</h4>
      </div>
    `;
  }
});

export const SchoolList = () => {
  const ListOfSchools = schools;

  let headerHtml = `<div id="schools_container" class="content_block">`;
  headerHtml += `<h3>Magic Schools:</h3>
                <ul>`;

  for (const school of ListOfSchools) {
    headerHtml += `<li>&{}`;
  }

  headerHtml += `</div>`;
  return headerHtml;
};
