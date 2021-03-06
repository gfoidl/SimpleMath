import "tsconfig-paths/register";
import { Math }                                from "@source/index";
import { TestFixture, TestCase, Test, Expect } from "alsatian";
//-----------------------------------------------------------------------------
@TestFixture()
export class Math_Divide {
    @TestCase(0, 1, 0)
    @TestCase(10, 2, 5)
    public Args_given___correct_quotient(a: number, b: number, res: number): void {
        const sut = new Math();

        const actual = sut.divide(a, b);

        Expect(actual).toBe(res);
    }
    //-------------------------------------------------------------------------
    @Test()
    public Divisor_is_0___throws_RangeError(): void {
        const sut = new Math();

        Expect(() => sut.divide(1, 0)).toThrowError(RangeError, "Divisor must not be 0");
    }
}
