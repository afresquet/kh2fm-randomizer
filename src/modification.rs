use std::fmt::Write;

pub trait Modification {
    fn address(&self) -> u32;
    fn value(&self) -> u32;

    fn to_pnach_line<T: Write>(&self, output: &mut T) -> std::fmt::Result {
        let address = self.address();
        let value = self.value();

        writeln!(output, "patch=1,EE,{address:08X},extended,{value:08X}")
    }

    fn to_lua_line<T: Write>(&self, output: &mut T) -> std::fmt::Result {
        let address = self.address();
        let value = self.value();

        match address >> 28 {
            0x0 => write!(output, "WriteByte(")?,
            0x1 => write!(output, "WriteShort(")?,
            0x2 => write!(output, "WriteInt(")?,
            _ => unreachable!(),
        }

        let address = address & 0x0FFF_FFFF;

        if address.wrapping_sub(0x032BB30) < 0x10FC0 {
            // Save file
            write!(output, "Save + ")?
        } else if address.wrapping_sub(0x1CCB300) < 0x1AA68 {
            // 03system.bin
            write!(output, "Sys3 + ")?
        } else if address.wrapping_sub(0x1CE5D80) < 0x354D0 {
            // 00battle.bin
            write!(output, "Btl0 + ")?
        }

        writeln!(output, "0x{address:08X}, 0x{value:08X})")
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    struct Test;

    impl Modification for Test {
        fn address(&self) -> u32 {
            1234
        }

        fn value(&self) -> u32 {
            6789
        }
    }

    #[test]
    fn pnach_line() {
        let mut result = String::new();
        Test.to_pnach_line(&mut result).unwrap();
        assert_eq!(
            result,
            "patch=1,EE,000004D2,extended,00001A85\n".to_string()
        );
    }

    #[test]
    fn lua_line() {
        let mut result = String::new();
        Test.to_lua_line(&mut result).unwrap();
        assert_eq!(result, "WriteByte(0x000004D2, 0x00001A85)\n".to_string());
    }
}
