import { Box, Button, Container, Flex, IconButton, Input, Textarea, VStack, Heading, useToast, Menu, MenuButton, MenuList, MenuItem, MenuDivider, Image, Switch, FormLabel, FormControl, HStack } from "@chakra-ui/react";
import { FaDownload, FaFileUpload, FaPrint, FaCog, FaPlus, FaMicrophone, FaRegKeyboard } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleDownloadChats = (format) => {
    // Placeholder function for downloading chats
    toast({
      title: `Downloaded chats.`,
      description: `Chats have been downloaded as ${format}.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handlePrintChats = () => {
    // Placeholder function for printing chats
    toast({
      title: `Print Chats`,
      description: `Chats have been sent to the printer.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={5}>
        <Heading as="h1">ChatGPT-4 Desktop App</Heading>
        <Flex w="full" wrap="wrap" gap={10}>
          {/* Main Chat Interface */}
          <Box w={{ base: "full", md: "65%" }} p={5} borderWidth="1px" borderRadius="lg">
            <VStack spacing={4}>
              <Box w="full" h="500px" p={3} overflowY="auto" borderWidth="1px" borderRadius="lg" bg="gray.50">
                {/* Chat messages would appear here */}
              </Box>
              <Textarea placeholder="Enter your message here..." />
              <Button leftIcon={<FaPlus />}>Send Message</Button>
            </VStack>
          </Box>

          {/* Avatar and Upload Section */}
          <VStack w={{ base: "full", md: "35%" }} spacing={5}>
            <Box w="full" h="250px" borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://images.unsplash.com/photo-1642334640124-c80d5e7e78d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbmltYXRlZCUyMGF2YXRhcnxlbnwwfHx8fDE3MDUzMjQ3MzJ8MA&ixlib=rb-4.0.3&q=80&w=1080" />
            </Box>
            <Button leftIcon={<FaFileUpload />}>Upload New Avatar</Button>
            <HStack>
              <IconButton icon={<FaMicrophone />} aria-label="Voice Communication" />
              <IconButton icon={<FaRegKeyboard />} aria-label="Text Communication" />
            </HStack>
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="voice-toggle" mb="0">
                Voice Communication
              </FormLabel>
              <Switch id="voice-toggle" />
            </FormControl>
          </VStack>

          {/* Features for Past Chats */}
          <Box w="full" p={5} borderWidth="1px" borderRadius="lg">
            <VStack spacing={4}>
              <Heading as="h3" size="lg">
                Past Chats
              </Heading>
              <Menu>
                <MenuButton as={Button} rightIcon={<FaDownload />}>
                  Download
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => handleDownloadChats("docx")}>.docx</MenuItem>
                  <MenuItem onClick={() => handleDownloadChats("pdf")}>.pdf</MenuItem>
                  <MenuItem onClick={() => handleDownloadChats("txt")}>.txt</MenuItem>
                  <MenuItem onClick={() => handleDownloadChats("csv")}>.csv</MenuItem>
                </MenuList>
              </Menu>
              <IconButton icon={<FaPrint />} aria-label="Print Chats" onClick={handlePrintChats} />
            </VStack>
          </Box>

          {/* Upload and Download Files Section */}
          <Box w="full" p={5} borderWidth="1px" borderRadius="lg">
            <VStack spacing={4}>
              <Heading as="h3" size="lg">
                File Management
              </Heading>
              <Button leftIcon={<FaFileUpload />}>Upload Files</Button>
              <Button leftIcon={<FaDownload />}>Download Files</Button>
            </VStack>
          </Box>

          {/* Settings Area */}
          <Box w="full" p={5} borderWidth="1px" borderRadius="lg">
            <VStack spacing={4}>
              <Heading as="h3" size="lg">
                Settings
              </Heading>
              <Button leftIcon={<FaCog />}>Bot Interaction Preferences</Button>
            </VStack>
          </Box>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;
