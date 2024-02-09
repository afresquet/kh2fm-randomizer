pub trait Modification {
    fn address(&self) -> Option<u32>;
    fn value(&self) -> Option<u32>;

    fn to_pnach_line(&self) -> Option<String> {
        let address = self.address()?;
        let value = self.value()?;

        Some(format!("patch=1,EE,{address:0>8X},extended,{value:0>8X}"))
    }

    fn to_lua_line(&self) -> Option<String> {
        let address = format!("{:0>8X}", self.address()?);
        let value = self.value()?;

        let method = match address.chars().next().unwrap() {
            '0' => "WriteByte",
            '1' => "WriteShort",
            '2' => "WriteInt",
            _ => unreachable!(),
        };

        let address = offset_address(&address);

        Some(format!("{method}({address}, 0x{value:0>8X})"))
    }
}

const FILES: [(&str, u32, u32); 3] = [
    ("Save", 0x032BB30, 0x10FC0), // Save file
    ("Sys3", 0x1CCB300, 0x1AA68), // 03system.bin
    ("Btl0", 0x1CE5D80, 0x354D0), // 00battle.bin
];

fn offset_address(address: &str) -> String {
    let address = u32::from_str_radix(&address[1..], 16).unwrap();

    for (file, offset, size) in FILES {
        match address.checked_sub(offset) {
            Some(address) if address < size => {
                return format!("{file} + 0x{address:0>5X}");
            }
            _ => (),
        }
    }

    format!("0x{address:0>8X}")
}

#[cfg(test)]
mod tests {
    use super::*;

    struct Test;

    impl Modification for Test {
        fn address(&self) -> Option<u32> {
            Some(1234)
        }

        fn value(&self) -> Option<u32> {
            Some(6789)
        }
    }

    #[test]
    fn pnach_line() {
        assert_eq!(
            Test.to_pnach_line(),
            Some("patch=1,EE,000004D2,extended,00001A85".to_string())
        );
    }

    #[test]
    fn lua_line() {
        assert_eq!(
            Test.to_lua_line(),
            Some("WriteByte(0x000004D2, 0x00001A85)".to_string())
        );
    }
}
