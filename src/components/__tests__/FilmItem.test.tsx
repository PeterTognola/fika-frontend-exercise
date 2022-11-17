import FilmItem from "../FilmItem";
import { render } from "@testing-library/react-native";

it('functions as a film item', () => {
    const out = render(<FilmItem />);

    // expect Has title.
    // expect Has genre(s).
    // function expects query.
});
