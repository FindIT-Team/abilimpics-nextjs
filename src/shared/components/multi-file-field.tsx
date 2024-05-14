"use client";

import {
    Box,
    Button,
    Center,
    FormLabel,
    Icon,
    Input,
    Text,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { FiFile } from "react-icons/fi";
import { PendingProvider } from "@/shared";

export function MultiFileField({
    name,
    accept,
    label,
}: {
    name: string;
    accept: string;
    label: string;
}) {
    const { register } = useFormContext();
    const { ref: _, ...rest } = register(name);

    const fileRef = useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const selectedFilesLength = selectedFiles.length - 2;
    const ending =
        selectedFilesLength > 10 && selectedFilesLength < 20
            ? "ов"
            : selectedFilesLength % 10 === 0
              ? "ов"
              : selectedFilesLength % 10 === 1
                ? ""
                : selectedFilesLength % 10 > 1
                  ? selectedFilesLength % 10 < 5
                      ? "а"
                      : "ов"
                  : undefined;

    return (
        <PendingProvider>
            <FormLabel>{label}</FormLabel>
            <Input
                type={"file"}
                display={"none"}
                ref={fileRef}
                accept={accept}
                multiple
                {...rest}
                onChange={(e) =>
                    setSelectedFiles(Array.from(e.target.files as FileList))
                }
            />
            <Center
                position={"relative"}
                width={"full"}
                padding={24}
                gap={1.5}
                flexDirection={"column"}
                border={"1.5px dashed"}
                borderColor={"whiteAlpha.300"}
                borderRadius={"md"}
                background={isDragging ? "whiteAlpha.100" : "transparent"}
                transition={"ease-in-out 150ms"}
                role={"group"}
                onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={(e) => {
                    e.preventDefault();

                    const fileInput = fileRef.current;
                    setIsDragging(false);

                    const files = e.dataTransfer.files;
                    if (!fileInput) return;

                    fileInput.files = files;
                    setSelectedFiles(Array.from(fileInput.files as FileList));
                }}
                _groupDisabled={{
                    cursor: "not-allowed",
                    opacity: 0.7,
                }}
            >
                <Text
                    textAlign={"center"}
                    // _groupDisabled={{ color: "whiteAlpha.700" }}
                >
                    Перетащите файл сюда или
                </Text>
                <Button
                    onClick={() => fileRef.current?.click()}
                    transition={"ease-in-out 150ms"}
                    background={
                        isDragging ? "whiteAlpha.300" : "whiteAlpha.200"
                    }
                    leftIcon={<Icon as={FiFile} />}
                    _groupDisabled={{
                        cursor: "not-allowed",
                        background: "whiteAlpha.200",
                    }}
                >
                    Выбрать файл
                </Button>
                {selectedFiles.length > 0 && (
                    <Box position={"absolute"} bottom={5}>
                        <Text textAlign={"center"}>
                            Выбранные файлы:{" "}
                            {selectedFiles.length > 3
                                ? selectedFiles
                                      .slice(0, 2)
                                      .map((file) => file.name)
                                      .join(", ") +
                                  ` и еще ${selectedFilesLength} файл${ending}`
                                : selectedFiles
                                      .map((file) => file.name)
                                      .join(", ")}
                        </Text>
                    </Box>
                )}
            </Center>
        </PendingProvider>
    );
}
